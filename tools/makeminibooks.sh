#!/bin/bash  -x

largestwidth=0
largestheight=0

for h in *.tiff; do
  echo "processing $h.."
  convert -verbose -resize 40% "$h" "tmp-${h//\.tiff/\.png}"
done

for i in ./tmp-*.png; do
  width=`identify-im6 -format "%w" "$i"`
  height=`identify-im6 -format "%h" "$i"`

  if [ $width -gt $largestwidth ]; then
    largestwidth=$width
  fi

  if [ $height -gt $largestheight ]; then
    largestheight=$height
  fi

done

echo "Resizing to largest hieght and width of page images ($largestwidth x $largestheight)"

for m in tmp-*.png; do
  convert -verbose -background none -extent "$largestwidth"x"$largestheight" -gravity center "$m" "${m/tmp-/}"
  newfilename=${m/tmp-/}
  mv "$newfilename" "${newfilename// /}"
done

#for j in ./ahg*.png; do
#  newfilename=${j//".tiff"/""}
#  newfilename=${j//" "/"-"}
 # newfilename=`echo $newfilename | cut -d '%' -f 2`
#  mv "$j" "$newfilename"
#done


#rm ./tmp-*.png
