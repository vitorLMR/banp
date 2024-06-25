import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default abstract class BaseDecorator {
  private name: string;
  private route: string;
  public constructor({ route, name }: { route: string; name: string }) {
    this.name = name;
    this.route = route;
  }

  public abstract base();

  protected controller(suffix?: string) {
    const route = suffix ? `${this.route}/${suffix}` : this.route;
    return applyDecorators(Controller(route), ApiTags(this.name));
  }
}
