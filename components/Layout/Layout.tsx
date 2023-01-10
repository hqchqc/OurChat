import styles from './Layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div
        className={`absolute inset-0 h-screen bg-slate-50 bg-bottom bg-no-repeat ${styles.bg}`}
      >
        <div
          className="absolute inset-0 bg-[bottom_1px_center] bg-grid-slate-900/[0.04]"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
          }}
        />
      </div>

      <div className="relative flex h-3/4 w-3/5 overflow-hidden rounded-2xl border bg-pink-50 bg-opacity-50 backdrop-blur">
        {children}
      </div>
    </div>
  )
}
