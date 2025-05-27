interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoUrl: string
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="relative z-10 w-full max-w-4xl rounded-lg bg-white p-4 dark:bg-slate-800">
                <button
                    onClick={onClose}
                    className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-slate-900 shadow-lg hover:bg-slate-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative aspect-video">
                    <iframe
                        src={videoUrl}
                        className="absolute inset-0 h-full w-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}