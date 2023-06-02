export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      liked_shows: {
        Row: {
          created_at: string | null
          show_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          show_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          show_id?: number
          user_id?: string
        }
      }
      shows: {
        Row: {
          created_at: string | null
          id: number
          show_date: string | null
          show_host: string | null
          show_imgURL: string | null
          show_path: string | null
          show_title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          show_date?: string | null
          show_host?: string | null
          show_imgURL?: string | null
          show_path?: string | null
          show_title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          show_date?: string | null
          show_host?: string | null
          show_imgURL?: string | null
          show_path?: string | null
          show_title?: string | null
          user_id?: string | null
        }
      }
      users: {
        Row: {
          full_name: string | null
          id: string
        }
        Insert: {
          full_name?: string | null
          id: string
        }
        Update: {
          full_name?: string | null
          id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
