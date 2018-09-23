export class LocalStorageProvider {
  public get(key: string): any {
    const str = localStorage.getItem(key);
    try {
      return JSON.parse(str);
    } catch (error) {
      return str;
    }
  }

  public set(key: string, model: any): void {
    localStorage.setItem(key, JSON.stringify(model));
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clearAll(): void {
    localStorage.clear();
  }
}
