Linux 101 Notes
===============

  * **Note**: We will not be running any commands that could harm existing data on the computer in any way. If we do get to an advanced topic of mounting an existing drive, we will mount it read-only.

Getting Started
---------------
  * Grab a USB stick
  * restart computer
  * may have to change BIOS settings to boot to usb
    - one of F2, DEL, F10, F12 will likely work on boot
  * when prompted, select **Try** over *Install*
  * open up the Terminal application

Troubleshooting
---------------
  * I can't boot to a usb
    - if you have a boot device option when you boot up, try usb, removable disk, or even cdrom or fdd will sometimes work
    - on one machine, the flash disk was listed as under hard disks, but the menu was collapsed
    - on some machines, taking out the hard disk is the way to get the usb to show up as a hard disk. this may not be feasible though, and I don't want to be responsible for someone dropping their disk on the floor
    - can you do it through virtualization software instead?
  * It freezes when I click on *Try Ubuntu*
    - don't click on *Try Ubuntu* but instead type `Ctrl+Alt+F1` to get to the first terminal. You have 6 of them on F1 through F6, and `Ctrl+Alt+F7` will get you back to the window manager (but why would you want to do that if it's just going to freeze?)
    - you can use the text based browser `lynx`
    - instead of opening up a page in the browser, you can use retrieve it with `wget` and then view it with `cat` or `less`
  * No icons are showing up on my desktop
    - Type `Alt+F2` to bring up a command menu, and then type `xterm` and hit enter. You'll be able to launch any subsequent commands (like `firefox`) from here
  * when I type, some strange box pops up in the lower right corner of the desktop
    - I know, it's annoying, right? This is a feature of this particular file explorer, to quickly go to a file in the current folder, and the desktop is a folder, too. Just click inside your terminal to make sure that the keyboard input goes to that window.
  * when I install a package, I see the following error:
```
Erorrs were encountered while processing:
 initramfs-tools
E: Sub-process /usr/bin/dpkg returned an error code (1)
```
    - this is a bug with 

Basic Commands
--------------
  * whoami
  * ls
  * cd
  * cat
  * less
  * grep
  * ps
  * locate
  * service
  * apt-cache
  * apt-get
  * sudo
  * nano
  * man
  * apropos
  * cp
  * mv
  * mkdir
  * rm
  * history
  * shutdown, restart

Basic Concepts
--------------
  * files and directories
    - ~, ., and ..
  * permissions
    - read, write, execute
    - user, group, other
  * chaining commands (|)
  * super user
  * Single Responsibility
  * Tab Completion
  * dot-files


Networking
----------
  * ping
  * ifconfig
  * whois
  * dig
  * ssh
  * ab
  * /etc/hosts


Creating a Simple Script
------------------------
```
sudo touch /usr/local/bin/rcc
sudo chown ubuntu:root /usr/local/bin/rcc
chmod a+x /usr/local/bin/rcc
cat > /usr/local/bin/rcc
#!/bin/bash

cowsay 'Welcome to Richmond Code Camp!'
^D
which rcc
rcc
```

Building a C App
----------------
```
cd linux101/htop
./autogen.sh
./configure && make
./htop
```

Running a Node App
-------------------
```
cd ~/linux101/node
node server.js
```

Creating a Rails App
--------------------
```
cd ~/linux101
rails new vanilla
rails server
```

Mono Shell (www.mono-project.com/CsharpRepl)
--------------------------------------------
```
cd ~/linux101/csharp
csharp ls.cs
```

Intermediate Concepts
---------------------
  * mounting filesystems
  * /proc filesystem
  * /dev devices
  * symlinks
  * du
  * df
  * mount


