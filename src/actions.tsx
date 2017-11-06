import { AnyAction } from 'redux';

const ActionList = {
  SELECT_MONTH: 'SELECT_MONTH'
};

export default ActionList;

export function chooseMonth(monthChosen: string) {
  const action: AnyAction = {
    type: ActionList.SELECT_MONTH,
    monthChosen
  };

  return action;
}
