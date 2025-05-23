/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **savedpokemon**
   * - Table in database
   */
  export namespace savedpokemon {
    export type Table = 'savedpokemon';
    export interface Selectable {
      /**
      * **savedpokemon.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('savedpokemon_id_seq'::regclass)`
      */
      id: number;
      /**
      * **savedpokemon.likes**
      * - `int4` in database
      * - `NOT NULL`, default: `1`
      */
      likes: number;
      /**
      * **savedpokemon.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string;
    }
    export interface JSONSelectable {
      /**
      * **savedpokemon.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('savedpokemon_id_seq'::regclass)`
      */
      id: number;
      /**
      * **savedpokemon.likes**
      * - `int4` in database
      * - `NOT NULL`, default: `1`
      */
      likes: number;
      /**
      * **savedpokemon.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string;
    }
    export interface Whereable {
      /**
      * **savedpokemon.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('savedpokemon_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **savedpokemon.likes**
      * - `int4` in database
      * - `NOT NULL`, default: `1`
      */
      likes?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **savedpokemon.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **savedpokemon.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('savedpokemon_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **savedpokemon.likes**
      * - `int4` in database
      * - `NOT NULL`, default: `1`
      */
      likes?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **savedpokemon.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **savedpokemon.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('savedpokemon_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **savedpokemon.likes**
      * - `int4` in database
      * - `NOT NULL`, default: `1`
      */
      likes?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **savedpokemon.name**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'savedpokemon_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = savedpokemon.Table;
    export type Selectable = savedpokemon.Selectable;
    export type JSONSelectable = savedpokemon.JSONSelectable;
    export type Whereable = savedpokemon.Whereable;
    export type Insertable = savedpokemon.Insertable;
    export type Updatable = savedpokemon.Updatable;
    export type UniqueIndex = savedpokemon.UniqueIndex;
    export type Column = savedpokemon.Column;
  
    export type AllBaseTables = [savedpokemon.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [savedpokemon.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "savedpokemon": savedpokemon.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "savedpokemon": savedpokemon.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "savedpokemon": savedpokemon.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "savedpokemon": savedpokemon.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "savedpokemon": savedpokemon.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "savedpokemon": savedpokemon.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "savedpokemon": savedpokemon.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "savedpokemon": savedpokemon.SQL;
  }[T];

}
