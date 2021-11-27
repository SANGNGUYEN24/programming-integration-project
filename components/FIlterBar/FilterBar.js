import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classes from "./FilterBar.module.scss";
import filterTypes from "./FilterType/FilterType";
import Select from "antd/lib/select";

const { Option } = Select;

const SelectionBar = ({ filterType, handleChange, title }) => {
  return (
    <div className={classes.ComponentWrapper}>
      <h3>{title}</h3>
      <Select
        style={{ width: "200px" }}
        size={"large"}
        onChange={handleChange}
        placeholder="- Tất cả -"
      >
        <Option value="">- Tất cả -</Option>
        {filterType.map((filerElement, index) => {
          return (
            <Option value={filerElement.id} key={index}>
              {filerElement.name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

const FilterBar = () => {
  const [filterValue, setFilterValue] = useState({
    genre: "",
    country: "",
    year: "",
    sortType: "popularity.desc",
  });
  const router = useRouter();

  useEffect(() => {
    console.log(`Filter value: ${JSON.stringify(filterValue)}`);
    router.push(
      `/?genre=${filterValue.genre}&country=${filterValue.country}&year=${filterValue.year}&sortType=${filterValue.sortType}`
    );
  }, [filterValue]);

  const handleFilterGenre = (value) => {
    console.log(`selected genre: ${value}`);
    setFilterValue({
      ...filterValue,
      genre: value,
    });
  };

  const handleFilterCountry = (value) => {
    console.log(`selected country: ${value}`);
    setFilterValue({
      ...filterValue,
      country: value,
    });
  };

  const handleFilterYear = (value) => {
    console.log(`selected year: ${value}`);
    setFilterValue({
      ...filterValue,
      year: value,
    });
  };

  const handleSortCondition = (value) => {
    console.log(`selected sort: ${value}`);
    setFilterValue({
      ...filterValue,
      sortType: value,
    });
  };

  return (
    <div className={classes.SectionWrapper}>
      {filterTypes.map((filterType, index) => {
        switch (index) {
          case 0:
            return (
              <SelectionBar
                filterType={filterType}
                key={index}
                handleChange={handleFilterGenre}
                title={"Genre"}
              />
            );
          case 1:
            return (
              <SelectionBar
                filterType={filterType}
                key={index}
                handleChange={handleFilterCountry}
                title={"Country"}
              />
            );
          case 2:
            return (
              <SelectionBar
                filterType={filterType}
                key={index}
                handleChange={handleFilterYear}
                title={"Year"}
              />
            );
          case 3:
            return (
              <SelectionBar
                filterType={filterType}
                key={index}
                handleChange={handleSortCondition}
                title={"Sort"}
              />
            );
          default:
            return;
        }
      })}
    </div>
  );
};

export default FilterBar;
