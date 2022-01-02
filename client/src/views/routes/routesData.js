import uuid from 'uuid';
import StreamList from '../pages/streams/list';
import StreamShow from '../pages/streams/show';

const routesData = [
  {
    path: '/streams/1',
    page: StreamList,
    ownProps: {},
  },
  {
    path: '/',
    page: StreamShow,
    ownProps: {},
  }
];

routesData.forEach(function iterateRoutesData(item) {
  item.uuid = uuid.v4();
});

export default routesData;
