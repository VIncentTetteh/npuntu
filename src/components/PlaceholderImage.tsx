interface PlaceholderImageProps {
  width: number
  height: number
  text: string
  className?: string
}

export default function PlaceholderImage({ width, height, text, className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-semibold ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">🏗️</div>
        <div>{text}</div>
      </div>
    </div>
  )
}
