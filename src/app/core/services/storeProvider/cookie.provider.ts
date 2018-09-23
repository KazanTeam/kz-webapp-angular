export class CookieProvider {
  public get(key: string): any {
    const ca = document.cookie.split(';');
    const caLen = ca.length;
    const cookieName = `${key}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public set(name: string, value: string, expireDays: number, path: string = ''): void {
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  public remove(key: string): void {
    this.set(key, '', -1);
  }

  public clearAll(): void {
    const cookies = document.cookie.split(';');
    const length = cookies.length;

    for (let i = 0; i < length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }
}
