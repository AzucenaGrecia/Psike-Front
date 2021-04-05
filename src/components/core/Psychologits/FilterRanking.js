import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilters } from '../../../features/psychologists/PsychologistsSlice'
import { colors } from '../../../ui'
import OptionContainer from '../../Containers/SelectContainer'
import Icon from '../../UI/Icon'
import { SelectItem } from '../../UI/Select'


export default function FilterRanking() {
    const dispatch = useDispatch();

    const changeRanking = (e) => {
      dispatch(setFilters({name:"filterRanking",value: e.target.value}));
    };
    return (
        <OptionContainer>
            <Icon type="arrowDrop" size="25" fill={colors.orange} />
            <SelectItem name={"ranking"} onChange={changeRanking}>
              <option value="">Ranking</option>
              <option value="asc">Asendente</option>
              <option value="desc">Desendente</option>
            </SelectItem>
          </OptionContainer>
    )
}
