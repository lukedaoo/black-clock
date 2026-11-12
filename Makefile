ZIP_NAME := black-clock.zip
EXT_FILES := manifest.json newtab.html newtab.css newtab.js icons

.PHONY: zip clean

zip:
	rm -f $(ZIP_NAME)
	zip -qr $(ZIP_NAME) $(EXT_FILES)

clean:
	rm -f $(ZIP_NAME)
