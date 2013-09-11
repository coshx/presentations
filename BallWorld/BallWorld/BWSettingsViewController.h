//
//  BWSettingsViewController.h
//  BallWorld
//
//  Created by Ben Taitelbaum on 9/11/13.
//  Copyright (c) 2013 Coshx. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol BWSettingsViewControllerDelegate <NSObject>
-(void) didUpdateBallSize: (float) radius;
@end

@interface BWSettingsViewController : UIViewController
@property id<BWSettingsViewControllerDelegate> delegate;
@end
