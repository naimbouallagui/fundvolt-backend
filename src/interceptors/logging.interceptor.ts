import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    return next
      .handle()
      .pipe(
        tap(() => console.log(`//${context.getArgs()[0].method}   ${context.getArgs()[0].url}`)),
      );
  }
}