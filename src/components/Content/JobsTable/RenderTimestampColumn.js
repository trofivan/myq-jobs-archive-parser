import moment from 'moment';

const RenderTimestampColumn = timestamp => moment(timestamp).format('lll');

export default RenderTimestampColumn;
