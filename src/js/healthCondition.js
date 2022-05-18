export default function healthCondition(item) {
    let result;
    if (item.health > 50) {
        result = 'healthy';
    } else if (item.health > 15) {
        result = 'wounded';
    } else {
        result = 'critical';
    }
    return result;
  }