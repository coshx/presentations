//
//  BWViewController.m
//  BallWorld
//
//  Created by Ben Taitelbaum on 9/11/13.
//  Copyright (c) 2013 Coshx. All rights reserved.
//

#import "BWViewController.h"

@interface BWViewController ()
@property (weak, nonatomic) IBOutlet UIImageView *ballView;
@property UIImage *ballImage;
@end

@implementation BWViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    
    self.ballImage = [UIImage imageNamed:@"ball.png"];
    [self drawBall: 50];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


- (void) drawBall: (float) radius {
    UIGraphicsBeginImageContext(self.ballView.frame.size);
    CGContextRef ballCtx = UIGraphicsGetCurrentContext();
    CGContextDrawImage(ballCtx, CGRectMake(50, 250, radius*2, radius*2), self.ballImage.CGImage);
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();

    self.ballView.image = image;
}

- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    if ([segue.identifier isEqualToString:@"editSettings"]) {
        ((BWSettingsViewController *)segue.destinationViewController).delegate = self;
    }
}
- (void) didUpdateBallSize:(float)radius {
    [self drawBall:radius];
}
@end
