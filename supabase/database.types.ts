export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface MainDB {
  public: {
    Tables: {
      movies: {
        Row: { // the data expected from .select()
          id: string
          src: string
          alt: string
          created_at: string
        }
        Insert: { // the data to be passed to .insert()
          id?: never // generated columns must not be supplied
          src: string // `not null` columns with no default must be supplied
          alt: string
        }
        Update: { // the data to be passed to .update()
          id?: never
          src?: string // `not null` columns are optional on .update()
          alt?: string
        }
      }
    }
  }
}

export interface GalleryDB {
  public: {
    Tables: {
      movies: {
        Row: { // the data expected from .select()
          id: string
          src: string
          alt: string
          title: string
          created_at: string
        }
        Insert: { // the data to be passed to .insert()
          id?: never // generated columns must not be supplied
          src: string // `not null` columns with no default must be supplied
          alt: string
          title: string
        }
        Update: { // the data to be passed to .update()
          id?: never
          src?: string // `not null` columns are optional on .update()
          alt?: string
          title?: string
        }
      }
    }
  }
}

export interface ArticlesDB {
  public: {
    Tables: {
      movies: {
        Row: { // the data expected from .select()
          id: string
          title: string
          content: string
          created_at: string
        }
        Insert: { // the data to be passed to .insert()
          id?: never // generated columns must not be supplied
          title: string // `not null` columns with no default must be supplied
          content: string
        }
        Update: { // the data to be passed to .update()
          id?: never
          title?: string // `not null` columns are optional on .update()
          content?: string
        }
      }
    }
  }
}
