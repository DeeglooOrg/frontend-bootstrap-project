# UI Architecture

## Layers

Applications are divided into 3 layers. Each layer may only depend on inner layers. This is the _dependency rule_.

```
+----------------------+
|                      |
|     APPLICATION      |
|   |              |   |
| +=|==============|=+ |
| | ∨              ∨ | |
| |   PRESENTATION   | |
| |   |          |   | |
| | +=|==========|=+ | |
| | | ∨          ∨ | | |
| | |    DOMAIN    | | |
| | |              | | |
| | +--------------+ | |
| +------------------+ |
+----------------------+
```

### Root

All the necessary configurations for the project.

### Application

This layer performs _implementation logic_ and contains:

- `public` folder with index.html which is used for the minifying process
- `src` where is application UI

### Presentation

This layer performs _application logic_ and contains:

- `State` of the application
  - `Store`, `Actions`, `Reducers`, `Sagas`

### Domain

This layer performs _business logic_ and contains:

- `Interfaces` that describe the type of data
- `Use Cases` that perform _business logic_
