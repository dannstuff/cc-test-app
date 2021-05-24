import React from "react";
import { FilterBarContainer, 
    ContentContainer, 
    PageNameContainer, 
    PageName, 
    FilterSearchContainer, 
    FilterButton, 
    FilterButtonContainer,
    SearchInputContainer,
    SearchInput, 
    SearchInputContent } 
from "./assets/styles";


function FilterBar(){
    return (
        <FilterBarContainer>
            <ContentContainer>
                <PageNameContainer>
                    <PageName>Investment Opportunities</PageName>
                </PageNameContainer>
                <FilterSearchContainer>
                    <FilterButtonContainer>
                        <FilterButton>Filters</FilterButton>
                    </FilterButtonContainer>
                    <SearchInputContainer>
                        <SearchInputContent>
                            <SearchInput type="text" placeholder="Search"/>
                        </SearchInputContent>
                    </SearchInputContainer>
                </FilterSearchContainer>
            </ContentContainer>
        </FilterBarContainer>
    )
}

export default FilterBar;