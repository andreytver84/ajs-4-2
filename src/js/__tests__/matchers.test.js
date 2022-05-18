import matchers from '../matchers';

test('should from max to min health', () => {
    const result = matchers([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]);   
    const exp = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];  
  
    expect(result).toEqual(exp);
  });