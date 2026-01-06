<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Textarea from '@/components/ui/textarea/Textarea.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { create, index } from '@/routes/databukus';
import { BreadcrumbItem, Category } from '@/types';
import { useForm } from '@inertiajs/vue3';
import { DateValue, getLocalTimeZone } from '@internationalized/date';
import axios from 'axios';
import { format } from 'date-fns';
import { CalendarIcon, LoaderCircle } from 'lucide-vue-next';
import { onMounted, ref, watch } from 'vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Buku',
        href: index().url,
    },
    {
        title: 'Tambah Data Buku',
        href: create().url,
    },
];
const form = useForm({
    judul: '',
    penulis: '',
    penerbit: '',
    tanggal_terbit: null as string | null,
    category_id: '',
    isbn: '',
    jumlah_halaman: '',
    deskripsi: '',
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
const value = ref<DateValue>();
watch(value, (val) => {
    form.tanggal_terbit = val
        ? format(val.toDate(getLocalTimeZone()), 'yyyy-MM-dd')
        : '';
});

const submit = () => {
    form.post(index().url, {
        onSuccess: () => {
            // Reset form fields after successful submission
            form.reset();
        },
    });
};
const setCustomMessage = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.validity.valueMissing) {
        if (input.id === 'judul') {
            input.setCustomValidity('Judul Buku wajib diisi.');
        } else if (input.id === 'penulis') {
            input.setCustomValidity('Penulis Buku Lengkap wajib diisi.');
        } else if (input.id === 'penerbit') {
            input.setCustomValidity('Penerbit Buku wajib diisi.');
        } else if (input.id === 'isbn') {
            input.setCustomValidity('ISBN wajib diisi.');
        } else if (input.id === 'jumlah_halaman') {
            input.setCustomValidity('Jumlah Halaman wajib diisi.');
        }
    } else {
        input.setCustomValidity('');
    }
};
const clearCustomMessage = (event: Event) => {
    const input = event.target as HTMLInputElement;
    input.setCustomValidity('');
};
</script>
<template>
    <!-- <Head title="Daftar Buku" /> -->
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="rounded-x1 flex h-full flex-1 flex-col gap-4 p-4">
            <div class="mx-auto mt-8 min-w-md p-6">
                <form @submit.prevent="submit">
                    <Card class="mx-auto w-full max-w-6xl">
                        <CardHeader>
                            <CardTitle>Tambah Data Buku</CardTitle>
                            <CardDescription
                                >Silakan isi data buku dengan
                                lengkap.</CardDescription
                            >
                        </CardHeader>
                        <CardContent>
                            <div
                                class="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4"
                            >
                                <!-- Kolom Kiri -->
                                <div class="w-full space-y-3 md:max-w-md">
                                    <!-- <div class="grid gap-6"> -->
                                    <div class="grid gap-2">
                                        <Label for="judul">Judul Buku</Label>
                                        <Input
                                            id="judul"
                                            type="text"
                                            required
                                            autofocus
                                            :tabindex="1"
                                            autocomplete="judul"
                                            v-model="form.judul"
                                            placeholder="Masukkan Judul Buku"
                                            ref="judulbukuInput"
                                            @invalid="setCustomMessage"
                                            @input="clearCustomMessage"
                                        />
                                        <InputError
                                            :message="form.errors.judul"
                                        />
                                    </div>

                                    <div class="grid gap-2">
                                        <Label for="penulis"
                                            >Penulis Buku</Label
                                        >
                                        <Input
                                            id="penulis"
                                            type="text"
                                            required
                                            :tabindex="2"
                                            autocomplete="penulis"
                                            v-model="form.penulis"
                                            placeholder="Masukkan Penulis Buku"
                                            ref="penulisbukuInput"
                                            @invalid="setCustomMessage"
                                            @input="clearCustomMessage"
                                        />
                                        <InputError
                                            :message="form.errors.penulis"
                                        />
                                    </div>

                                    <div class="grid gap-2">
                                        <Label for="penerbit"
                                            >Penerbit Buku</Label
                                        >
                                        <Input
                                            id="penerbit"
                                            type="penerbit"
                                            required
                                            :tabindex="3"
                                            autocomplete="penerbit"
                                            v-model="form.penerbit"
                                            placeholder="Masukkan Penerbit Buku"
                                            ref="penerbitbukuInput"
                                            @invalid="setCustomMessage"
                                            @input="clearCustomMessage"
                                        />
                                        <InputError
                                            :message="form.errors.penerbit"
                                        />
                                    </div>
                                    <!-- Tanggal Terbit -->
                                    <div class="grid gap-2">
                                        <Label for="tanggal_terbit">
                                            Tanggal Terbit
                                        </Label>
                                        <Popover>
                                            <PopoverTrigger as-child>
                                                <Button
                                                    variant="outline"
                                                    class="w-full justify-start text-left font-normal"
                                                >
                                                    <CalendarIcon
                                                        class="mr-2 h-4 w-4"
                                                    />
                                                    {{
                                                        value
                                                            ? value.toString()
                                                            : 'Pilih Tanggal Surat'
                                                    }}
                                                </Button>
                                            </PopoverTrigger>

                                            <PopoverContent class="w-auto p-0">
                                                <Calendar
                                                    v-model="value"
                                                    initial-focus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <InputError
                                            :message="
                                                form.errors.tanggal_terbit
                                            "
                                        />
                                    </div>
                                    <!-- Kategori -->
                                    <div class="grid gap-2">
                                        <Label for="category_id"
                                            >Kategori Buku</Label
                                        >

                                        <Select
                                            v-model="form.category_id"
                                            id="category_id"
                                            ref="categoriesInput"
                                        >
                                            <SelectTrigger class="w-full">
                                                <SelectValue
                                                    placeholder="Pilih Kategori"
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem
                                                        v-for="category in categories"
                                                        :key="category.id"
                                                        :value="category.id"
                                                    >
                                                        {{ category.name }}
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            :message="form.errors.category_id"
                                        />
                                    </div>
                                </div>

                                <!-- Kolom Kanan -->
                                <div class="w-full space-y-3 md:max-w-full">
                                    <div class="grid gap-2">
                                        <Label for="isbn">ISBN</Label>
                                        <Input
                                            id="isbn"
                                            type="text"
                                            required
                                            :tabindex="7"
                                            autocomplete="tel"
                                            v-model="form.isbn"
                                            placeholder="Masukkan isbn"
                                            @invalid="setCustomMessage"
                                            @input="clearCustomMessage"
                                        />
                                        <InputError
                                            :message="form.errors.isbn"
                                        />
                                    </div>

                                    <div class="grid gap-2">
                                        <Label for="jumlah_halaman"
                                            >Jumlah Halaman</Label
                                        >
                                        <Input
                                            id="jumlah_halaman"
                                            type="text"
                                            required
                                            :tabindex="7"
                                            autocomplete="tel"
                                            v-model="form.jumlah_halaman"
                                            placeholder="Masukkan Jumlah Halaman"
                                            @invalid="setCustomMessage"
                                            @input="clearCustomMessage"
                                        />
                                        <InputError
                                            :message="
                                                form.errors.jumlah_halaman
                                            "
                                        />
                                    </div>

                                    <div class="grid gap-2">
                                        <Label for="deskripsi"
                                            >Deskripsi Singkat</Label
                                        >
                                        <Textarea
                                            id="deskripsi"
                                            type="text"
                                            :tabindex="7"
                                            autocomplete="tel"
                                            v-model="form.deskripsi"
                                            placeholder="Masukkan Deskripsi Singkat"
                                        />
                                        <InputError
                                            :message="form.errors.deskripsi"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter class="flex justify-between px-6 pt-5 pb-6">
                            <Button
                                type="submit"
                                class="mt-4 w-full"
                                :tabindex="9"
                                :disabled="form.processing"
                            >
                                <LoaderCircle
                                    v-if="form.processing"
                                    class="h-4 w-4 animate-spin"
                                />
                                Simpan
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
