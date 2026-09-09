# ERD — Lalapel Simple Note Taking App

```mermaid
erDiagram
    USERS ||--o{ NOTES : owns

    USERS {
        uuid id PK
        varchar name
        varchar email UK
        varchar password "hashed"
        enum role "user, admin"
        timestamp created_at
        timestamp updated_at
    }

    NOTES {
        uuid id PK
        uuid user_id FK
        varchar title "default Untitled Note"
        longtext content "nullable"
        timestamp created_at
        timestamp updated_at
    }
```
