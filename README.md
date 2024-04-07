| ❗❗ With the release of vNAS and the new Consolidated Radar Client (CRC), this project has been archived. |
| -------------------------------------------------------------------------------------------------------- |




# vERAM WX

This is an [Electron](https://github.com/electron/electron) application that loads NEXRAD weather onto a transparent canvas. The window can be set on top of all other windows and made to not process mouse input, effectively making it an overlay. Originally created for vERAM, however it can be used with VRC, Euroscope, or any radar client. Only USA non-oceanic sectors are preloaded.

Currently uses Iowa State's q2-hsr-900913 tiles.

## How to Use

1. Open your controller client and load your profile.
1. Open this application. On first run, it will open over all of the CONUS, however subsequently it will open on your last saved position.
1. If your controller client is not your main display, use Win+arrow to move to the appropriate display.
1. Move your mouse to the upper right hand corner, and a dropdown of programmed sectors will appear. Select your sector.
1. Pan/zoom the map to align the sectors with your controller client.
1. Press `Ctrl+Alt+Y` to make the window always on top and ignore mouse events
1. To make further adjustments, or get control of the window, press `Ctrl+Alt+Y` again.

## How to Build

1. Clone this repository
1. Run `npm install`
1. To run one time, use `npm start`
1. To build a portable exe application, use `npm run make`
