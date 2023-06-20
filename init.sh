#!/bin/bash

## cesium assets copy script
source_dirs=(
  "node_modules/cesium/Build/Cesium/Workers"
  "node_modules/cesium/Build/Cesium/ThirdParty"
  "node_modules/cesium/Build/Cesium/Assets"
  "node_modules/cesium/Build/Cesium/Widgets"
)

destination_dir="public/Cesium"

if [ ! -d "$destination_dir" ]; then
  mkdir -p "$destination_dir"
fi

for dir in "${source_dirs[@]}"
do
  cp -R "$dir" "$destination_dir"
done

echo "Cesium assets have been copied succesfully"