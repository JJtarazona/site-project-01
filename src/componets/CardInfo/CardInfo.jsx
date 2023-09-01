import React from "react";

export default function CardInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 rounded-2xl shadow-sm">
          <div className="flex justify-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Pedidos</span>
              <div className="text-900 font-medium text-xl">152</div>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-full w-10 h-10">
              <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
            </div>
          </div>
          <span className="text-green-500 font-medium">24 nuevos </span>
          <span className="text-500">desde la última visita</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1 ">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 rounded-2xl shadow-sm">
          <div className="flex justify-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Ingresos</span>
              <div className="text-900 font-medium text-xl">$2.100</div>
            </div>
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-10 h-10">
              <i className="pi pi-map-marker text-orange-500 text-xl"></i>
            </div>
          </div>
          <span className="text-green-500 font-medium">%52+ </span>
          <span className="text-500">desde la última semana</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 rounded-2xl shadow-sm">
          <div className="flex justify-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">Clientes</span>
              <div className="text-900 font-medium text-xl">28441</div>
            </div>
            <div className="flex items-center justify-center bg-cyan-100 rounded-full w-10 h-10">
              <i className="pi pi-inbox text-cyan-500 text-xl"></i>
            </div>
          </div>
          <span className="text-green-500 font-medium">520 </span>
          <span className="text-500">nuevos registrados</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 rounded-2xl shadow-sm">
          <div className="flex justify-between mb-3">
            <div>
              <span className="block text-500 font-medium mb-3">
                Comentarios
              </span>
              <div className="text-900 font-medium text-xl">152 Sin leer</div>
            </div>
            <div className="flex items-center justify-center bg-purple-100 rounded-full w-10 h-10">
              <i className="pi pi-comment text-purple-500 text-xl"></i>
            </div>
          </div>
          <span className="text-green-500 font-medium">85 </span>
          <span className="text-500">respondieron</span>
        </div>
      </div>
    </div>
  );
}
