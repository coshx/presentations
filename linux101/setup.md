Setup
=====

USB Preparation
---------------
  * started going down route of using Vagrant with a stock ubuntu-12.04-i386 vagrant box, but this was on a dynamic 80G vmdk, which is 80G as a raw file. I couldn't figure out how to easily resize this without creating another vagrant box from scratch, so I went down that route instead.

  * used virtualbox to boot off a livecd
    - Update: switched to using xubuntu for better disk and memory usage
  * Following advice of https://wiki.ubuntu.com/LiveUsbPendrivePersistent I used usb-creator-gtk to create a live usb with persistent storage
    - In xubuntu, it's System -> Startup Disk Creator
    - In xubuntu, I had to use fdisk to delete the partition that it kept automounting, then remove the usb stick and re-insert in order to be able to write to the whole disk instead of to just one partition  
  * converted from the usb to a raw file on my mac. This was easier for me than figuring out how to mount a file on osx as a mass storage device on Virtualbox, although that would be a better way.

    - first, determine where your usb drive is
```
osx> diskutil list
/dev/disk0
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *500.1 GB   disk0
   1:                        EFI                         209.7 MB   disk0s1
   2:                  Apple_HFS Macintosh HD            499.2 GB   disk0s2
   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
/dev/disk2
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     Apple_partition_scheme                        *2.0 TB     disk2
   1:        Apple_partition_map                         32.3 KB    disk2s1
   2:                 Apple_HFSX Time Machine Backups    2.0 TB     disk2s2
/dev/disk3
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *2.0 GB     disk3
   1:             Windows_FAT_32                         2.0 GB     disk3s1
```
      * you can also use `mount` to determine the disk, but I find this output much clearer
    - now do a byte-copy copy of the entire disk (not just the mounted partition)
      * /dev/rdisk? is much faster than /dev/disk?
```
osx> sudo dd if=/dev/rdisk3 of=xubuntu-12.04.1-i386-usb.img bs=1m
```
      * __Important:__ replace _rdisk3_ in the above command with the correct device on your machine! You can seriously mess things up if you output to the wrong device!
      * pro-tip: while this is running, run something like this in another shell:
```
osx> watch -n 10 "sudo pkill -INFO dd"
```

    - when the copying has completed, convert to a format that is suitable for loading into VirtualBox
```
osx> VBoxManage convertdd xubuntu-12.04.1-i386-usb.img xubuntu-12.04.1-i386-usb.vdi
Converting from raw image file="xubuntu-12.04.1-i386-usb.img" to file="xubuntu-12.04.1-i386-usb.vdi"...
Creating dynamic image with size 2013265920 bytes (1920MB)...
```
    - to attach this new vdi to an existing virtual machine, you'll have to release the old one (and remove it if it's no longer needed), and then add a new hard disk

  * Updating
    - create a new VirtualBox machine, using our new vdi as the hard disk

    - I Installed:
      * zsh w/ oh-my-zsh
      * vim (even though I'm an emacs guy)
      * build tools
      * g++
      * ruby 1.9.3 (no rvm)
      * ~postgresql~
      * ~mongodb~ (later uninstalled to free up ~150M)
      * `sudo gem install rails`
      * `rails new vanilla` (can show if there are missing dependencies)
      * node from source (includes npm)
      * nginx
      * mono-csharp-shell
      * some other goodies

    - Shutdown cleanly
```
ubuntu> sudo shutdown -h now
```

    - Create the raw image file that we're going to put on the usb drives
```
osx> VBoxManage internalcommands converttoraw xubuntu-12.04.1-i386-usb.vdi xubuntu-12.04.1-i386-usb-linux101.img
Converting image "xubuntu-12.04-i386-usb.vdi" with size 2013265920 bytes (1920MB) to raw...
```


  * Image Flash Drives
    - plug the drive in
    - determine which disk it is
```
osx> diskutil list
/dev/disk0
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *500.1 GB   disk0
   1:                        EFI                         209.7 MB   disk0s1
   2:                  Apple_HFS Macintosh HD            499.2 GB   disk0s2
   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
/dev/disk2
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     Apple_partition_scheme                        *2.0 TB     disk2
   1:        Apple_partition_map                         32.3 KB    disk2s1
   2:                 Apple_HFSX Time Machine Backups    2.0 TB     disk2s2
/dev/disk3
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *2.0 GB     disk3
   1:             Windows_FAT_32                         2.0 GB     disk3s1
```

    - unmount that disk so we can write to it cleanly
```
osx> sudo diskutil unmountDisk /dev/disk3
Unmount of all volumes on disk3 was successful
```

    - now copy over the raw image
```
osx> sudo dd if=xubuntu-12.04.1-i386-usb-linux101.img of=/dev/rdisk3 bs=1m 
```

    - pro-tip: if you left the watch command running from earlier, it will still work

    - I found that the usb was mounted again at this point, so just to be safe, unmount it before pulling it out
```
osx> sudo diskutil unmountDisk /dev/disk3
```
