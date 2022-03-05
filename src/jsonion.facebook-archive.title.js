var postTitle = [
	{
		regex: '{displayName} updated (?:his|her) status\.',
		type: 'status_update'
	},
	{
		regex: '{displayName} posted in (.*)[\.]*',
		type: 'posted_in_group',
		0: 'group_name'
	},
	{
		regex: '{displayName} shared a video from the playlist (.*)[\.]*',
		type: 'shared_video_from_playlist',
		0: 'playlist'
	},
	{
		regex: '{displayName} shared an event\.',
		type: 'shared_event'
	},
	{
		regex: '{displayName} was attending (.*) at (.*)[\.]*',
		type: 'attended_event',
		0: 'event_name',
		1: 'place_name'
	},
	{
		regex: '{displayName} shared an event to the event: (.*)[\.]*',
		type: 'shared_event_to_event',
		0: 'event_name'
	},
	{
		regex: '{displayName} shared a link to the event: (.*)[\.]*',
		type: 'shared_link_to_event',
		0: 'event_name'
	},
	{
		regex: '{displayName} shared a link.',
		type: 'shared_link'
	},
	{
		regex: '{displayName} shared a post.',
		type: 'shared_post'
	},
	{
		regex: '{displayName} shared a photo.',
		type: 'shared_photo'
	},
	{
		regex: '{displayName} shared a video.',
		type: 'shared_video'
	},
	{
		regex: '{displayName} was live.',
		type: 'was_live'
	},
	{
		regex: '{displayName} shared a live audio.',
		type: 'shared_live_audio'
	},
	{
		regex: '{displayName} shared live audio.',
		type: 'shared_live_audio'
	},
	{
		regex: '{displayName} wrote on (.*)\'s timeline.',
		type: 'wrote_on_timeline',
		0: 'friend'
	},
	{
		regex: '{displayName} was at (.*)[\.]*',
		type: 'was_at',
		0: 'place_name'
	},
	{
		regex: '{displayName} is feeling loved.',
		type: 'feeling_loved'
	},
	{
		regex: '{displayName} shared a post to (.*)\'s timeline.',
		type: 'shared_on_timeline',
		0: 'friend'
	},
	{
		regex: '{displayName} shared a Page.',
		type: 'shared_page'
	},
	{
		regex: 'Mobile Uploads',
		album: 'Mobile Uploads'
	},
	{
		regex: 'Timeline Photos',
		album: 'Timeline Photos'
	}
];


var commentTitle = [
	{
		regex: '{displayName} commented on (?:his|her) own post\.',
		type: 'commented_own_post'
	},
	{
		regex: '{displayName} replied to (?:his|her) own comment\.',
		type: 'replied_own_comment'
	},
	{
		regex: '{displayName} commented on (?:his|her) own photo\.',
		type: 'commented_own_photo'
	},
	{
		regex: '{displayName} commented on (?:his|her) own video\.',
		type: 'commented_own_video'
	},
	{
		regex: '{displayName} commented on (?:his|her) own live video\.',
		type: 'commented_own_live_video'
	},
	{
		regex: '{displayName} commented on (?:his|her) own live audio\.',
		type: 'commented_own_live_audio'
	},
	{
		regex: '{displayName} commented on (?:his|her) own bio\.',
		type: 'commented_own_bio'
	},
	{
		regex: '{displayName} commented on (.*)\'s post\.',
		type: 'commented_post',
		0: 'user'
	},
	{
		regex: '{displayName} commented on (.*)\'s photo\.',
		type: 'commented_photo',
		0: 'user'
	},
	{
		regex: '{displayName} commented on (.*)\'s video\.',
		type: 'commented_video',
		0: 'user'
	},
	{
		regex: '{displayName} commented on (.*)\'s live video\.',
		type: 'commented_live_video',
		0: 'user'
	},
	{
		regex: '{displayName} commented on (.*)\'s live audio\.',
		type: 'commented_live_audio',
		0: 'user'
	},
	{
		regex: '{displayName} commented on (.*)\'s bio\.',
		type: 'commented_bio',
		0: 'user'
	}
];

export { postTitle, commentTitle }