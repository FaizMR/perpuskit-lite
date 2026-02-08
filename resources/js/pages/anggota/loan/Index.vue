<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import Pagination from '@/components/tables/Pagination.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import FlashMessage from '@/components/ui/flash/FlashMessage.vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import { index, show, store } from '@/routes/peminjamanbukus';
import { Book, BreadcrumbItem, Category, PaginatedResponse } from '@/types';
import { Link, router, usePage } from '@inertiajs/vue3';
import { watchDebounced } from '@vueuse/core';
import axios from 'axios';
import { Eye } from 'lucide-vue-next';
import { computed, onMounted, ref } from 'vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Peminjaman Buku',
        href: index().url,
    },
];
const props = defineProps<{
    BookLoan: PaginatedResponse<Book>;
}>();
console.log(props.BookLoan);
const pagination = computed(() => ({
    previous: props.BookLoan.prev_page_url,
    next: props.BookLoan.next_page_url,
}));
const pageProps = computed(() => {
    return (
        (usePage().props.filters as {
            search?: string;
            sortColumn?: string;
            order?: 'asc' | 'desc';
            category?: string;
            searchBy?: string;
            perPage?: string;
        }) || {}
    );
});
const categories = ref<Category[]>([]);
onMounted(async () => {
    try {
        const response = await axios.get('/api/categories');
        categories.value = response.data;
    } catch (error) {
        console.error('Gagal mengambil kategori:', error);
    }
});
const searchQuery = ref(pageProps.value.search ?? '');
const searchBy = ref(pageProps.value.searchBy ?? '');
const selectedSort = ref(pageProps.value.sortColumn ?? 'created_at');
const sortOrder = ref<'asc' | 'desc'>(pageProps.value.order ?? 'asc');
const categorySearch = ref(pageProps.value.category ?? '');
const perPage = ref(pageProps.value.perPage ?? '7');
// console.log(categorySearch.value);
const updatePeminjamanBukus = () => {
    router.get(
        '/peminjamanbukus',
        {
            search: searchQuery.value,
            sortColumn: selectedSort.value,
            order: sortOrder.value,
            column: searchBy.value,
            category: categorySearch.value,
            searchBy: searchBy.value,
            perPage: perPage.value,
        },
        { preserveState: true, replace: true },
    );
};
function toggleSort(key: string) {
    if (selectedSort.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        selectedSort.value = key;
        sortOrder.value = 'asc';
    }
    updatePeminjamanBukus();
}
watchDebounced(
    [searchQuery, categorySearch, searchBy, perPage],
    () => {
        updatePeminjamanBukus();
    },
    { debounce: 500 },
);
const columns = [
    { key: 'no', label: 'No' },
    { key: 'judul', label: 'Judul Buku', sortable: true },
    { key: 'penulis', label: 'Penulis Buku', sortable: true },
    { key: 'penerbit', label: 'Penerbit Buku', sortable: true },
    { key: 'tanggal_terbit', label: 'Tanggal Terbit', sortable: true },
    { key: 'category_id', label: 'Kategori', sortable: true },
    { key: 'actions', label: 'Aksi' },
];
const isOpen = ref<Record<number, boolean>>({});
const catatan = ref<string>('');
const isCatatanOpen = ref<Record<number, boolean>>({});
const handleRequestPinjam = (book_id: number) => {
    console.log(book_id);
    router.post(
        store().url,
        {
            book_id: book_id,
            catatan: catatan.value ?? null, // jika ada form catatan
        },
        {
            onSuccess: () => {
                isOpen.value[book_id] = false;
                isCatatanOpen.value[book_id] = false;
                catatan.value = '';
                console.log('Permintaan pinjam berhasil dikirim ke admin.');
            },
        },
    );
};
const resetFilters = () => {
    searchQuery.value = '';
    searchBy.value = '';
    categorySearch.value = '';
    perPage.value = '7';

    updatePeminjamanBukus();
};
const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));
};
const popoverOpen = ref(false);
</script>
<template>
    <!-- <Head title="Peminjaman Buku" /> -->
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="mx-auto mt-5 max-w-6xl overflow-x-auto">
            <FlashMessage />
            <Card class="border-transparent">
                <CardContent>
                    <div
                        class="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center"
                    >
                        <div class="flex items-end gap-2">
                            <Input
                                id="searchQuery"
                                class="w-full sm:w-64"
                                v-model="searchQuery"
                                placeholder="Cari..."
                            />
                            <select
                                id="searchBy"
                                v-model="searchBy"
                                @change="updatePeminjamanBukus"
                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none sm:w-40"
                            >
                                <option value="">- Semua Kolom -</option>
                                <option value="judul">Judul Buku</option>
                                <option value="penulis">Penulis Buku</option>
                                <option value="penerbit">Penerbit Buku</option>
                                <option value="tanggal_terbit">
                                    Tanggal Terbit
                                </option>
                            </select>
                        </div>
                        <TooltipProvider>
                            <Tooltip v-if="!popoverOpen">
                                <Popover>
                                    <TooltipTrigger as-child>
                                        <PopoverTrigger
                                            ><Button
                                                variant="outline"
                                                class="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-funnel"
                                                >
                                                    <path
                                                        d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
                                                    />
                                                </svg> </Button
                                        ></PopoverTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <span>Filter Data</span>
                                    </TooltipContent>
                                    <PopoverContent
                                        ><div class="flex flex-col">
                                            <Label
                                                for="categorySearch"
                                                class="mb-2"
                                                >Kategori</Label
                                            >
                                            <select
                                                id="categorySearch"
                                                v-model="categorySearch"
                                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                                            >
                                                <option value="">
                                                    -- Semua Kategori --
                                                </option>
                                                <option
                                                    v-for="category in categories"
                                                    :key="category.id"
                                                    :value="category.id"
                                                >
                                                    {{ category.name }}
                                                </option>
                                            </select>
                                            <Label
                                                for="perPage"
                                                class="mt-3 mb-2"
                                            >
                                                Jumlah Data
                                            </Label>
                                            <select
                                                id="perPage"
                                                v-model="perPage"
                                                class="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                                            >
                                                <option value="7">
                                                    -- Jumlah Standar --
                                                </option>
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="50">50</option>
                                            </select>
                                            <div class="mt-2 flex flex-col">
                                                <Button
                                                    type="button"
                                                    class="rounded bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                                                    @click="resetFilters"
                                                >
                                                    Reset Filter
                                                </Button>
                                            </div>
                                        </div></PopoverContent
                                    >
                                </Popover>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <DataTable
                        :columns="columns"
                        :data="BookLoan.data"
                        :links="BookLoan.links"
                        :current_page="props.BookLoan.current_page"
                        :per_page="props.BookLoan.per_page"
                        :filters="{
                            search: searchQuery,
                            sortColumn: selectedSort,
                            sortOrder: sortOrder,
                        }"
                        @toggleSort="toggleSort"
                    >
                        <template #no="{ i, current_page, per_page }">
                            {{ (current_page - 1) * per_page + i + 1 }}
                        </template>
                        <template #category_id="{ item }">
                            {{ item.category?.name || 'Tidak Ada' }}
                        </template>
                        <template #tanggal_terbit="{ item }">
                            {{ formatDate(item.tanggal_terbit) }}
                        </template>
                        <template #actions="{ item: peminjamanbukus }">
                            <div class="flex items-center gap-2">
                                <div class="group relative inline-block">
                                    <!-- Show -->
                                    <Link
                                        :href="show(peminjamanbukus.id)"
                                        as="button"
                                    >
                                        <Button variant="outline" size="icon">
                                            <Eye class="h-4 w-4" />
                                        </Button>
                                    </Link>

                                    <span
                                        class="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100"
                                    >
                                        Lihat
                                    </span>
                                </div>

                                <Dialog
                                    v-model:open="isOpen[peminjamanbukus.id]"
                                    :key="peminjamanbukus.id"
                                >
                                    <DialogTrigger as-child>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            class="w-full sm:w-20"
                                        >
                                            Ajukan
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent class="sm:max-w-xl">
                                        <DialogHeader>
                                            <DialogTitle
                                                >Konfirmasi Pengajuan Peminjaman
                                                Buku</DialogTitle
                                            >
                                            <h1 class="mt-2">
                                                Dengan Judul:
                                                <strong>{{
                                                    peminjamanbukus.judul
                                                }}</strong>
                                            </h1>
                                            <DialogDescription>
                                                Silakan konfirmasi bahwa Anda
                                                ingin mengirim permintaan
                                                peminjaman buku ini. Pengajuan
                                                akan diteruskan ke admin untuk
                                                diproses.
                                            </DialogDescription>

                                            <Textarea
                                                id="catatan"
                                                class="mt-5 w-full"
                                                v-model="catatan"
                                                placeholder="Catatan..."
                                            />
                                        </DialogHeader>
                                        <DialogFooter class="gap-2">
                                            <Button
                                                variant="destructive"
                                                @click="
                                                    handleRequestPinjam(
                                                        peminjamanbukus.id,
                                                    )
                                                "
                                            >
                                                Konfirmasi
                                            </Button>
                                            <DialogClose as-child>
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    >Batal</Button
                                                >
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </template>
                    </DataTable>
                </CardContent>
            </Card>
        </div>
        <Pagination
            :previousPage="pagination.previous"
            :nextPage="pagination.next"
            :links="props.BookLoan.links"
        />
    </AppLayout>
</template>
