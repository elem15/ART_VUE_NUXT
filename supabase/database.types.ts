export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: { // the data expected from .select()
          id: string
          url: string
          alt: string
          created_at: string
        }
        Insert: { // the data to be passed to .insert()
          id?: never // generated columns must not be supplied
          url: string // `not null` columns with no default must be supplied
          alt: string
        }
        Update: { // the data to be passed to .update()
          id?: never
          url?: string // `not null` columns are optional on .update()
          alt?: string
        }
      }
    }
  }
}
