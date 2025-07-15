import React from "react";
import { toast as globalToast } from "../../hooks/use-toast";
import { useToast } from "../../hooks/use-toast";

export function ToastContainer() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-black/80 border border-cyan-400 text-cyan-200 rounded-lg shadow-md px-4 py-3 w-80 backdrop-blur animate-fadeIn"
          onClick={() => dismiss(toast.id)}
        >
          <h4 className="font-bold text-white">{toast.title}</h4>
          {toast.description && (
            <p className="text-sm text-cyan-300 mt-1">{toast.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
