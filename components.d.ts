type SliderPicture = {
  id: string
  src: string
  alt: string
}
type Article = {
  id: string
  title: string
  content: string
}
type Gallery = {
  id: string
  src: string
  alt: string
  title: string
  description?: string
}
type GalleryItem = {
  id: string
  src: string
  href: string
  title: string
  description?: string
}

type GalleryName = 'landscape' | 'portrait' | 'graphic'
