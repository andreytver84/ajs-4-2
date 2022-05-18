import healthCondition from '../healthCondition';

test('should conditions', () => {
  const healthy = healthCondition({name: 'Маг', health: 90});
  expect(healthy).toBe('healthy');

  const wounded = healthCondition({name: 'Маг', health: 40});
  expect(wounded).toBe('wounded');

  const critical = healthCondition({name: 'Маг', health: 10});
  expect(critical).toBe('critical');  
});
