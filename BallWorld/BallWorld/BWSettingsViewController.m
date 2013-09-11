//
//  BWSettingsViewController.m
//  BallWorld
//
//  Created by Ben Taitelbaum on 9/11/13.
//  Copyright (c) 2013 Coshx. All rights reserved.
//

#import "BWSettingsViewController.h"

@interface BWSettingsViewController ()
@property (weak, nonatomic) IBOutlet UISlider *ballSizeSlider;

@end

@implementation BWSettingsViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)donePressed:(id)sender {
    [self dismissViewControllerAnimated:YES completion:NULL];
}
- (IBAction)didChangeBallSizeSlider:(id)sender {
    if (self.delegate != NULL) {
        [self.delegate didUpdateBallSize:self.ballSizeSlider.value];
    }
}

@end
