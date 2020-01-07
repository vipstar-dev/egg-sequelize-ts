import { Sequelize, ISequelizeValidationOnlyConfig, SequelizeOptions } from 'sequelize-typescript';
import { SequelizeConfig } from "sequelize-typescript/lib/types/SequelizeConfig";

declare module 'egg' {
  // 便于egg 将方法挂载到IModel上
  interface IModel extends Sequelize { }

  // extend app
  interface Application {
    Sequelize: Sequelize;
    model: IModel;
  }

  // extend context
  interface Context {
    model: IModel;
  }

  // extend your config 
  interface EggAppConfig {
    sequelize: SequelizeConfig | ISequelizeValidationOnlyConfig
  }

}

interface EggSequelizeOptions extends SequelizeOptions {
  delegate?: string;
  baseDir?: string;
  exclude?: string | Array<string>;
  /**
   * A full database URI
   * @example
   * `connectionUri:"mysql://localhost:3306/database"`
   */
  connectionUri?: string;
}

interface DataSources {
  datasources: EggSequelizeOptions[];
}

// todo: 实现多配置。
// interface EggSequelizeOptions extends sequelize.Options {
//   delegate?: string;
//   baseDir?: string;
// }

// interface DataSources {
//   [datasources]: EggSequelizeOptions;
// }

