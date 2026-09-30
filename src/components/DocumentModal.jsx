import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink, FileText, ZoomIn, ZoomOut, CheckCircle2 } from 'lucide-react';

export default function DocumentModal({ doc, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
    setIsZoomed(false);
  }, [doc]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (doc?.pages > 1) {
        if (e.key === 'ArrowRight' && currentPage < doc.pages) setCurrentPage(p => p + 1);
        if (e.key === 'ArrowLeft' && currentPage > 1) setCurrentPage(p => p - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [doc, currentPage, onClose]);

  if (!doc) return null;

  const isImageCert = !!doc.image && !doc.previewPrefix;
  const isMultiPage = !!doc.previewPrefix && doc.pages > 1;

  const currentImageSrc = isImageCert
    ? doc.image
    : doc.previewPrefix
      ? `./document-previews/${doc.previewPrefix}-${currentPage}.png`
      : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-cyan-500/30 bg-cyber-900/95 shadow-2xl shadow-cyan-950/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-500/20 bg-slate-900/80">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-base sm:text-lg font-bold text-white truncate font-display">
                {doc.title}
              </h3>
              {doc.subtitle && (
                <p className="text-xs text-slate-400 truncate">{doc.subtitle}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {doc.fileUrl && (
              <a
                href={doc.fileUrl}
                download
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition"
                title="Télécharger le fichier original"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Télécharger</span>
              </a>
            )}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700 transition"
              title={isZoomed ? "Réduire" : "Agrandir"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition"
              title="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer Body */}
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-slate-950/60 min-h-[380px]">
          {currentImageSrc ? (
            <div className={`transition-all duration-300 flex justify-center ${isZoomed ? 'w-full max-w-none scale-105' : 'max-h-[68vh]'}`}>
              <img
                src={currentImageSrc}
                alt={doc.title}
                className="max-h-[68vh] object-contain rounded-lg border border-slate-700/60 shadow-lg shadow-black/50 select-none"
              />
            </div>
          ) : (
            <div className="text-center py-12 px-4">
              <FileText className="w-16 h-16 text-cyan-400/40 mx-auto mb-4" />
              <p className="text-slate-300 font-medium mb-3">Aperçu direct non disponible pour ce format.</p>
              {doc.fileUrl && (
                <a
                  href={doc.fileUrl}
                  download
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:brightness-110 transition shadow-lg shadow-cyan-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger le document</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Multi-page controls footer if PDF preview */}
        {isMultiPage && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-800 bg-slate-900/90 text-xs text-slate-300">
            <span className="text-slate-400">
              Page <span className="text-cyan-400 font-bold">{currentPage}</span> sur {doc.pages} (Aperçu haute fidélité)
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-700 transition"
                title="Page précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex space-x-1">
                {Array.from({ length: doc.pages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-6 h-6 rounded-md text-xs font-semibold transition ${
                      currentPage === i + 1
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(doc.pages, p + 1))}
                disabled={currentPage === doc.pages}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-700 transition"
                title="Page suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
