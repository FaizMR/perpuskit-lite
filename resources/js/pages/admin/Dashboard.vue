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
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import { BookOpen, Library, Users } from 'lucide-vue-next';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Beranda',
        href: '/dashboard',
    },
];

// =====================
// Data
// =====================
const peminjaman = [
    {
        label: 'Total Dipinjam',
        value: '150',
    },
    {
        label: 'Telah Dikembalikan',
        value: '90',
    },
    {
        label: 'Terlambat',
        value: '60',
    },
];
const Buku = [
    {
        label: 'Total Buku',
        value: '200',
    },
    {
        label: 'Sering Dipinjam',
        value: 'Deleniti rerum qui ut.',
    },
    {
        label: 'Buku Rusak/Hilang',
        value: '10',
    },
];
const Pengguna = [
    {
        label: 'Total Pengguna',
        value: 200,
    },
    {
        label: 'Total Petugas',
        value: '20',
    },
    {
        label: 'Total Anggota',
        value: '150',
    },
];
const recentTransactions = [
    {
        id: '10',
        judul: 'Deleniti rerum qui ut.',
        name: 'Dr. Ava Schuster',
        status: 'dipinjam',
    },
    {
        id: '50',
        judul: 'Optio enim odit quis id ipsum voluptatem.',
        name: 'Mrs. Yazmin Schimmel II',
        status: 'pending',
    },
    {
        id: '149',
        judul: 'Animi placeat beatae est incidunt nesciunt eveniet.',
        name: 'Lenora Abbott',
        status: 'dibatalkan',
    },
];
const topDenda = [
    {
        id: '56',
        name: 'Dr. Leonardo Farrell',
        denda: '5000',
    },
    {
        id: '89',
        name: 'Koby Kirlin',
        denda: '10000',
    },
    {
        id: '46',
        name: 'Dr. Emilia DuBuque',
        denda: '1000',
    },
    {
        id: '76',
        name: 'Dr. Kale Barrows',
        denda: '7000',
    },
];
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
                                    <TableCell>{{ row.judul }}</TableCell>
                                    <TableCell>{{ row.name }}</TableCell>
                                    <TableCell>
                                        <Badge
                                            :variant="statusVariant(row.status)"
                                        >
                                            {{ row.status }}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div class="flex items-center justify-between gap-2">
                            <CardTitle>Denda</CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent class="space-y-4">
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
                                    <TableCell>{{ row.name }}</TableCell>
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
