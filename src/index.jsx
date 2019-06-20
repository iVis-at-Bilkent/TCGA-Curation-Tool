import React from 'react';
import { render } from 'react-dom';
import PathwayMapper from "./react-pathway-mapper";

const rootEl = document.getElementById('app');
console.log(window.location.search);
const placeHolderGenes = [{hugoGeneSymbol: "MDM2"}, {hugoGeneSymbol: "TP53"}];


const pathwayName = findGetParameter("pathwayName");
console.log(pathwayName);
const profiles = findGetParameter("q");
console.log(profiles);

if(pathwayName.length === 0){
  render(<PathwayMapper isCBioPortal={true} genes={placeHolderGenes} store={undefined}/>, rootEl);
} else {
  render(<PathwayMapper isCBioPortal={false} genes={placeHolderGenes} store={undefined} pathwayName={pathwayName} profiles={parseProfiles(profiles)}/>, rootEl);
}

if (module.hot) {
  module.hot.accept();
}

function parseProfiles(profiles){
  const res = [];
  profiles.forEach(profile => {
    const tmp = profile.split(",");
    res.push({studyId: tmp[0], profileId: tmp[1]});
  });
  return res;
}

function findGetParameter(parameterName) {
  var result = [],
      tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
      tmp = items[index].split("=");
      if (tmp[0] === parameterName) result.push(decodeURIComponent(tmp[1]));
  }
  return result;
}
