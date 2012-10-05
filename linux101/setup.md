Setup
=====

USB Preparation
---------------
  * started going down route of using Vagrant with a stock ubuntu-12.04-i386 vagrant box, but this was on a dynamic 80G vmdk, which is 80G as a raw file. I couldn't figure out how to easily resize this without creating another vagrant box from scratch, so I went down that route instead.

  * used virtualbox to boot off a livecd
  * Following advice of https://wiki.ubuntu.com/LiveUsbPendrivePersistent I used usb-creator-gtk to create a live usb with persistent storage

  * converted from the usb to a raw file on my mac. This was easier for me than figuring out how to mount a file on osx as a mass storage device on Virtualbox, although that would be a better way.

    - first, use mount to determine where your usb drive is
```
osx% mount
/dev/disk0s2 on / (hfs, local, journaled)
devfs on /dev (devfs, local, nobrowse)
map -hosts on /net (autofs, nosuid, automounted, nobrowse)
map auto_home on /home (autofs, automounted, nobrowse)
localhost:/SeEmINgLyrAnd0M5/ on /Volumes/MobileBackups (mtmfs, nosuid, read-only, nobrowse)
//Ben%20Taitelbaum@GlueTimeCapsule.local/Ben%26Pitiya%20Backup on /Volumes/Ben&Pitiya Backup (afpfs, nobrowse)
/dev/disk2s2 on /Volumes/Time Machine Backups (hfs, local, nodev, nosuid, journaled)
/dev/disk3s1 on /Volumes/Untitled (msdos, local, nodev, nosuid, noowners)
```
    - now do a byte-copy copy of the entire disk (not just the mounted partition)
      * /dev/rdisk? is much faster than /dev/disk?
```
sudo dd if=/dev/rdisk3 of=ubuntu-12.04-i386-usb.img
```
      * pro-tip: while this is running, run something like this in another shell:
```
watch -n 10 "sudo pkill -INFO dd"
```

    - when the copying has completed, convert to a format that is suitable for loading into VirtualBox
```
VBoxManage convertdd ubuntu-12.04-i386-usb.img ubuntu-12.04-i386-usb.vdi
```

  * Updating
    - create a new VirtualBox machine, using our new vdi as the hard disk

    - I Installed:
      * zsh w/ oh-my-zsh
      * vim (even though I'm an emacs guy)
      * build tools
      * g++
      * rvm w/ ruby 1.9.3
      * postgresql
      * mongodb (later uninstalled to free up ~150M)
      * `gem install rails`
      * `rails new vanilla` (which leads to installing openssl, libyaml, libsqlite3)
      * node
      * npm
      * apache2
      * mlocate

    - Shutdown cleanly
```
ubuntu% sudo shutdown -h now
```

    - Create the raw image file that we're going to put on the usb drives
```
osx% VBoxManage internalcommands converttoraw ubuntu-12.04-i386-usb.vdi ubuntu-12.04-i386-usb.img
Converting image "ubuntu-12.04-i386-usb.vdi" with size 2013265920 bytes (1920MB) to raw...
```


  * Image Flash Drives
    - plug the drive in
    - use mount to determine which disk it is
```
osx% mount
/dev/disk0s2 on / (hfs, local, journaled)
devfs on /dev (devfs, local, nobrowse)
map -hosts on /net (autofs, nosuid, automounted, nobrowse)
map auto_home on /home (autofs, automounted, nobrowse)
localhost:/SeEmINgLyrAnd0M5/ on /Volumes/MobileBackups (mtmfs, nosuid, read-only, nobrowse)
//Ben%20Taitelbaum@GlueTimeCapsule.local/Ben%26Pitiya%20Backup on /Volumes/Ben&Pitiya Backup (afpfs, nobrowse)
/dev/disk2s2 on /Volumes/Time Machine Backups (hfs, local, nodev, nosuid, journaled)
/dev/disk3s1 on /Volumes/Untitled (msdos, local, nodev, nosuid, noowners)
```

    - unmount that disk so we can write to it cleanly
```
sudo diskutil unmountDisk /dev/disk3
Unmount of all volumes on disk3 was successful
```

    - now copy over the raw image
```
sudo dd if=ubuntu-12.04-i386-usb.img of=/dev/rdisk3 bs=1m 

# pro-tip: if you left the watch command running from earlier,
# it will still work
```

    - I found that the usb was mounted again at this point, so just to be safe, unmount it before pulling it out
```
sudo diskutil unmountDisk /dev/disk3
```
