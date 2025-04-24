'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function WebcamPreview() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [streaming, setStreaming] = useState(false)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setStreaming(true)
      }
    } catch (err) {
      console.error('Error al acceder a la cámara:', err)
    }
  }

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream
    stream?.getTracks().forEach((track) => track.stop())
    setStreaming(false)
  }

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="h-full rounded-2xl">
        <CardContent className="flex flex-col items-center gap-4 p-4">
          <video
            ref={videoRef}
            className="rounded-2xl  aspect-video bg-black"
            autoPlay
            playsInline
            muted
          />
          <div className="flex gap-2">
            {streaming ? (
              <Button variant="destructive" onClick={stopCamera}>
                Detener cámara
              </Button>
            ) : (
              <Button onClick={startCamera}>
                Iniciar cámara
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
