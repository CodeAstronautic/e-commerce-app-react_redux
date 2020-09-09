import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './FilterListItem.scss';
import { setCheckboxFilter, removeCheckboxFilter } from '../../redux/actions/filters';
import { getAllPhones, getAllPhoneBrands } from '../../redux/selectors/vivos';

const FilterListItem = () => {
  const phones = useSelector(getAllPhones);
  const phoneBrands = useSelector(getAllPhoneBrands);
  const dispatch = useDispatch();

  const handleFilterBrand = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value))
    } else {
      dispatch(removeCheckboxFilter(value))
    }
  }

  const brandsItemsCount = {}
  phones.forEach(phone => {
    brandsItemsCount[phone.brand] = brandsItemsCount[phone.brand] + 1 || 1;
  })

  return (
    <Fragment>
      {
        phoneBrands.map((phone, i) => {
          return (
            <div className='filter-list' key={i} >
              <input type="checkbox" name={phone} id={phone} value={phone} onChange={(e) => handleFilterBrand(e)} />
              <label htmlFor={phone}>{phone} ({brandsItemsCount[phone]})</label>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default FilterListItem
