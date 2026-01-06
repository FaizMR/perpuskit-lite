<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import { Book, BreadcrumbItem, PengajuanPeminjaman } from '@/types';
import { Head } from '@inertiajs/vue3';
import { BookOpen, Library, Users } from 'lucide-vue-next';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/dashboard',
    },
];
// =====================
// Components
// =====================
const props = defineProps<{
    peminjaman: {
        dipinjam: number;
        dikembalikan: number;
        terlambat: number;
        rusak_hilang: number;
    };
    buku: {
        total: number;
        paling_sering_dipinjam: Book | null;
    };
    pengguna: {
        total: number;
        petugas: number;
        anggota: number;
    };
    recentTransactions: PengajuanPeminjaman[];
    topDenda: PengajuanPeminjaman[];
}>();

// const bukuseringDipinjam = computed(() => {
//     const book = props.bukuseringDipinjam;
//     if (!book?.judul || book.total_dipinjam == null) return 'Null';
//     return `${book.judul} (${book.total_dipinjam})`;
// });

// =====================
// Data
// =====================
const peminjaman = [
    {
        label: 'Total Dipinjam',
        value: props.peminjaman.dipinjam?.toString() || 'Null',
    },
    {
        label: 'Telah Dikembalikan',
        value: props.peminjaman.dikembalikan?.toString() || 'Null',
    },
    {
        label: 'Terlambat',
        value: props.peminjaman.terlambat?.toString() || 'Null',
    },
];
const Buku = [
    {
        label: 'Total Buku',
        value: props.buku.total?.toString() || 'Null',
    },
    {
        label: 'Sering Dipinjam',
        // value: bukuseringDipinjam.value,
        value: props.buku.paling_sering_dipinjam?.judul || 'Null',
    },
    {
        label: 'Buku Rusak/Hilang',
        value: props.peminjaman.rusak_hilang?.toString() || 'Null',
    },
];
const Pengguna = [
    {
        label: 'Total Pengguna',
        value: props.pengguna.total?.toString() || 'Null',
    },
    {
        label: 'Total Petugas',
        value: props.pengguna.petugas?.toString() || 'Null',
    },
    {
        label: 'Total Anggota',
        value: props.pengguna.anggota?.toString() || 'Null',
    },
];
function formatHari(hari: number): string {
    return `${hari} hari terlambat`;
}
function hitungHari(
    tanggalPeminjaman: string | Date,
    tanggalJatuhTempo: string | Date,
): number {
    const peminjaman = new Date(tanggalPeminjaman).getTime();
    const jatuhTempo = new Date(tanggalJatuhTempo).getTime();

    return Math.ceil((jatuhTempo - peminjaman) / 86400000);
}
const statusVariant = (status: string) => {
    if (status === 'pending') return 'warning';

    const destructiveStatus = ['terlambat', 'rusak', 'hilang', 'dibatalkan'];
    if (destructiveStatus.includes(status)) return 'destructive';

    return 'success';
};
const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};
// const transaksi = [{}];
// const peminjamanSaya = [];
</script>

<template>
    <Head titele="Beranda" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="space-y-3 bg-background p-3">
            <!-- Statistik -->
            <div
                class="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-3"
            >
                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between"
                    >
                        <div class="flex items-center gap-2">
                            <BookOpen class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Peminjaman</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableBody>
                                <TableRow
                                    v-for="row in peminjaman"
                                    :key="row.label"
                                    class="text-xs"
                                >
                                    <TableCell>{{ row.label }}</TableCell>
                                    <TableCell>{{ row.value }}</TableCell>
                                </TableRow></TableBody
                            >
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between"
                    >
                        <div class="flex items-center gap-2">
                            <Library class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Buku</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableRow
                                v-for="row in Buku"
                                :key="row.label"
                                class="text-xs"
                            >
                                <TableCell>{{ row.label }}</TableCell>
                                <TableCell>{{ row.value }}</TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        class="flex flex-row items-center justify-between"
                    >
                        <div class="flex items-center gap-2">
                            <Users class="h-5 w-5 text-primary" />
                            <CardTitle class="text-xl">Anggota</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent class="space-y-2 text-sm">
                        <Table>
                            <TableRow
                                v-for="row in Pengguna"
                                :key="row.label"
                                class="text-xs"
                            >
                                <TableCell>{{ row.label }}</TableCell>
                                <TableCell>{{ row.value }}</TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            <!-- Laporan -->
            <div
                class="mx-auto grid max-w-5xl grid-cols-1 gap-2 lg:grid-cols-3"
            >
                <Card class="lg:col-span-2">
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle class="flex items-center text-xl"
                                >Ringkasan Aktivitas Hari Ini
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Judul Buku</TableHead>
                                    <TableHead>Nama Anggota</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="row in recentTransactions"
                                    :key="row.id"
                                    class="text-[11px]"
                                >
                                    <TableCell>{{ row.id }}</TableCell>
                                    <TableCell>{{ row.book.judul }}</TableCell>
                                    <TableCell>{{ row.user.name }}</TableCell>
                                    <TableCell v-if="row.status === 'dipinjam'">
                                        <Badge variant="destructive">
                                            {{
                                                formatHari(
                                                    hitungHari(
                                                        row.tanggal_peminjaman,
                                                        row.tanggal_jatuh_tempo,
                                                    ),
                                                )
                                            }}
                                        </Badge>
                                    </TableCell>
                                    <TableCell v-else>
                                        <Badge
                                            :variant="statusVariant(row.status)"
                                        >
                                            {{ row.status }}
                                        </Badge>
                                    </TableCell>
                                    <!-- <TableCell>{{ row.status }}</TableCell> -->
                                </TableRow>
                            </TableBody>
                        </Table>
                        <!-- 
                        <div class="flex items-center justify-between gap-2">
                            <p class="pt-3 pb-2 text-sm">Terlambat</p>
                            <Button variant="ghost" class="text-sm"
                                >Lihat Semua</Button
                            >
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Judul Buku</TableHead>
                                    <TableHead>Nama Anggota</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="row in terlambat"
                                    :key="row.id"
                                    class="text-[11px]"
                                >
                                    <TableCell>{{ row }}</TableCell>
                                    <TableCell>{{
                                        row.databukus.judul
                                    }}</TableCell>
                                    <TableCell>{{ row.users.name }}</TableCell>
                                    <TableCell v-if="row.status === 'dipinjam'">
                                        <Badge variant="destructive">
                                            {{
                                                formatHari(
                                                    hitungHari(
                                                        row.tanggal_peminjaman,
                                                        row.tanggal_jatuh_tempo,
                                                    ),
                                                )
                                            }}
                                        </Badge>
                                    </TableCell>
                                    <TableCell v-else>
                                        <Badge
                                            :variant="statusVariant(row.status)"
                                        >
                                            {{ row.status }}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{{ row.status }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table> -->
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle>Denda</CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent class="space-y-4">
                        <!-- <div>
                            <h4 class="mb-2 text-sm font-semibold">
                                Peminjaman Saya
                            </h4>
                            <div class="space-y-2 text-sm">
                                <div
                                    v-for="p in totalDenda"
                                    :key="p.id"
                                    class="flex justify-between"
                                >
                                    <span>{{ p.judul }}</span>
                                    <span class="text-muted-foreground">{{
                                        p.tanggal
                                    }}</span>
                                </div>
                            </div>
                        </div>

                        <Separator /> -->

                        <!-- <div>
                            <h4
                                class="mb-2 flex items-center gap-2 text-sm font-semibold"
                            >
                                <DollarSign class="h-4 w-4 text-destructive" />
                                Denda Saya
                            </h4>
                            <div class="space-y-1 text-sm">
                                <div class="flex justify-between">
                                    <span>Total Denda</span
                                    ><span>Rp 50.000</span>
                                </div>
                                <div
                                    class="flex justify-between font-medium text-destructive"
                                >
                                    <span>Belum Dibayar</span
                                    ><span>Rp 50.000</span>
                                </div>
                            </div>
                        </div> -->

                        <Table>
                            <TableHeader>
                                <TableRow class="text-xs">
                                    <TableHead>Nama Anggota</TableHead>
                                    <TableHead>Total Denda</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow
                                    v-for="row in topDenda"
                                    :key="row.id"
                                    class="text-[11px]"
                                >
                                    <TableCell>{{ row.user.name }}</TableCell>
                                    <TableCell>{{
                                        formatRupiah(row.denda)
                                    }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table></CardContent
                    >
                </Card>
            </div>
        </div>
    </AppLayout>
</template>
