import { ConfigurableModuleBuilder, Module, Inject } from '@nestjs/common';
import { UsersController } from './users.controller'
import { AlbumbsController } from './albums.controller'
import { UserStore } from './users.store';
import { Config } from './config';
import { async } from 'rxjs';
/**
 * Standard Provider - Class as Dependency an essential topic of Dependency Injection. We will see the @Injectable decorator, Constructor injection, and ways of providing the Dependency using Injection tokens which also includes the use of the @Inject Decorator and @Optional Decorator. 

This video also discusses the different ways of defining the providers using "useClass", "useExisting" and Same name syntax.

Topics covered

✱ Standard Providers
✱ @Injectable decorator
✱ Constructor Injection
✱ @Inject decorator
✱ @Optional decorator
✱ useClass
✱ useExisting
 */

// it should be from other file
@Module({
  controllers: [UsersController, AlbumbsController],
  providers: [{ provide: UserStore, useClass: UserStore } // class provider
    , { provide: 'DATABASE_NAME', useValue: 'MONDODB' }
    , { provide: 'MAIL', useValue: ['a@y.com', 'b@y.com'] }
    , { provide: Config, useValue: { type: 'DEV', node: 17 } } // value provider
    , {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (options) => {
      // try catch
      const connection = await createConnection(options);
      return connection
    },
    inject: ['DB_OPTIONS']
  },
  { provide: 'DB_OPTIONS', useValue: { url: '', user: '', password: '' } }
  ]
  // use factory syn / async
  // injection token : provider instance
  // providers: [{ provide: "STORE", useClass: UserStore }]
  // injection scopes
  // defaut or standard scope , request scpoes (new object fir each incoming request)
  // transient scope , new instance for each injector class eg , user persoanl settings
})
export class AppModule { }
function createConnection(options: any) {
  return Promise.resolve('CONNECTED')
  //throw new Error('Function not implemented.');
}

