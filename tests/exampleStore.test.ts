import { useExampleStore } from '../store/exampleStore';

describe('useExampleStore', () => {
  beforeEach(() => {
    useExampleStore.setState({ count: 0 });
  });

  it('should increment the count', () => {
    useExampleStore.getState().increment();
    expect(useExampleStore.getState().count).toBe(1);
  });

  it('should decrement the count', () => {
    useExampleStore.setState({ count: 2 });
    useExampleStore.getState().decrement();
    expect(useExampleStore.getState().count).toBe(1);
  });
});
