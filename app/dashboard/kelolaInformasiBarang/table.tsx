"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

interface products {
  id: number
  categoryId: number
  title: string
  priceOriginal: number
}

interface TableProps {
  data: products[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border rounded-lg">
        <thead>
          <tr className="bg-white border-b text-black">
            <th className="p-4 font-bold ">ID Barang</th>
            <th className="p-4 font-bold">Nama Barang</th>
            <th className="p-4 font-bold">Harga</th>
            <th className="p-4 font-bold text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((barang) => (
            <tr key={barang.id} className="border-b text-black">
              <td className="p-4">{barang.id}</td>
              <td className="p-4">{barang.title}</td>
              <td className="p-4">
                Rp {barang.priceOriginal.toLocaleString("id-ID")}
              </td>
              <td className="p-4 flex justify-center gap-4">
                <Eye className="text-gray-600 cursor-pointer" />
                <Pencil className="text-gray-600 cursor-pointer" />
                <Trash2 className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
