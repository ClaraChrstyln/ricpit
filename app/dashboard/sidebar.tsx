"use client";

import {
  Home,
  Users,
  Package,
  HandCoins,
  Warehouse,
  FileText,
  ShoppingCart,
  ClipboardList,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="fixed h-screen w-64 bg-green-900 text-white p-6">
      <div className="flex items-center mb-10">
        <svg
          className="h-8 w-8 text-indigo-500"
          fill="none"
          viewBox="0 0 54 33"
        >
          <path fill="currentColor" d="..." />
        </svg>
      </div>

      <nav className="space-y-2">
        <a
          href="/dashboard"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <Home size={20} />
          Dashboard
        </a>
        <a
          href="/dashboard/kelolaInformasiBarang"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/kelolaInformasiBarang")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <Users size={20} />
          Kelola Informasi Barang
        </a>
        <a
          href="/dashboard/kelolaTransaksi"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/kelolaTransaksi")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <HandCoins size={20} />
          Kelola Transaksi
        </a>
        <a
          href="/dashboard/kelolaPersediaan"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/kelolaPersediaan")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <Warehouse size={20} />
          Kelola Persediaan
        </a>
        <a
          href="/dashboard/kelolaLaporan"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/kelolaLaporan")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <FileText size={20} />
          Kelola Laporan
        </a>
        <a
          href="/dashboard/barang"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/barang")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <Package size={20} />
          Barang
        </a>
        <a
          href="/dashboard/transaksi"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/transaksi")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <ShoppingCart size={20} />
          Transaksi
        </a>
        <a
          href="/dashboard/detailTransaksi"
          className={clsx(
            "flex items-center gap-3 px-4 py-2 rounded-lg",
            isActive("/dashboard/detailTransaksi")
              ? "bg-green-700 text-white font-medium"
              : "text-gray-400 hover:text-white hover:bg-green-700"
          )}
        >
          <ClipboardList size={20} />
          Detail Pesanan
        </a>
      </nav>
    </aside>
  );
}
