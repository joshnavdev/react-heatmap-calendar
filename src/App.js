import React, { Component } from 'react';

import CalendarHeatmap from 'components/CalendarHeatmap';

const views = [{
  nameDisplay: 'Pedidos',
  dataIndex: 'deliveries',
  color: 'blue',
  maxCount: 20,
  tooltipText: (count, date) => {
    return <span>{`${count} pedidos el ${date}`}</span>
  }
}, {
  nameDisplay: 'Reseñas',
  dataIndex: 'reviews',
  color: 'green',
  maxCount: 20,
  tooltipText: (count, date) => {
    return <span>{`${count} reseñas el ${date}`}</span>
  }
}, {
  nameDisplay: 'Otros',
  dataIndex: 'others',
  maxCount: 20,
  color: 'purple',
}]

const streakData = {
  '2017-05-05': {
    deliveries: 1,
    reviews: 2,
    others: 10,
  },
};

const calendarHeatmapProps = {
  fewerText: 'alto',
  lowerText: 'bajo',
  views,
  streakData,
  // TODO: Ask for month names
}
class App extends Component {
  render() {
    return (
      <CalendarHeatmap {...calendarHeatmapProps} />
    );
  }
}

export default App;
