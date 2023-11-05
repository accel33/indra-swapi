export class MockDynamoDBService {
  constructor() {}

  async scan(tableName: string): Promise<any[]> {
    return [{ id: '1', name: 'Item 1' }];
  }

  async get(tableName: string, id: string): Promise<any> {
    return { id, name: 'Item 1' };
  }

  async put(tableName: string, item: Record<string, any>): Promise<any> {
    return item;
  }

  async delete(tableName: string, id: string): Promise<any> {
    return { id };
  }
}
