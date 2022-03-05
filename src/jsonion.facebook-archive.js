/*

  # Sets of instructions to parse JSON datasets

    */

import { postTitle, commentTitle } from './jsonion.facebook-archive.title.js'

var types = {
	string: 'string',
	number: 'number',
	float: parseFloat,

	stringDecode: function (string) {
		if (typeof string === 'string')
			return decodeURIComponent(escape(string));
		else
			return false;
	},

	stringDecodeNotEmpty: function (string) {
		if (typeof string === 'string' && string.length)
			return decodeURIComponent(escape(string));
		else
			return false;
	},

	timestampRoundToMinute: function (timestamp) {
		if (Number.isInteger(timestamp / 1)) {
			var coeff = 60;
			return Math.floor(timestamp / coeff) * coeff;
		} else
			return false;
	}
}


 //
// Simple objects to test, first off

var testObject = {
  test: {object: {string: "test"}}
}

var objectTest_1 = {
	'.test': {
		this: 'object',
		'.object .string => object.string': null
	}
}

var objectTest_2 = {
	this: 'object',
	'.test .object .string => object.string': null
}


/*

  # Posts
  - "status_update"
  - "shared_post"
  - "shared_event"
  - "shared_link"
  - "shared_photo"
  - "shared_video"
  - "attended_event"
  - "shared_link_to_event"
  - "shared_event_to_event"
  - "posted_in_group"
  - "wrote_on_timeline"
  - "was_live"
  - "shared_live_audio"
  - "was_at"
  - "shared_page"
  - "feeling_loved"

    */

var posts = {

	'#': {

		this: 'post',
		type: 'posts',

		'.timestamp': types.number,
		'.data # .post => .post': types.stringDecode,
		'.data # .update_timestamp => post.update_timestamp': types.number,

		'.title': types.stringDecodeNotEmpty,
		'.title => .action': {
			__type: types.stringDecode,
			__oneOf: postTitle
		},

		'.attachments # .data # .media': {
			this: 'media',
			remap: 'post.attachments # .media',

			'.uri': types.string,
			'.creation_timestamp': types.number,
			'.title': types.stringDecodeNotEmpty,
			'.description': types.stringDecodeNotEmpty,


			'.media_metadata .photo_metadata': {
				remap: 'media.photo_metadata',

				// '.taken_timestamp': types.number,
				// '.latitude': types.float,
				// '.longitude': types.float,
				// '.upload_ip': null
			},


			'.media_metadata .video_metadata': {
				remap: 'media.video_metadata',

				// '.upload_timestamp': types.number,
				// '.upload_ip': null
			}
		},

		'.attachments # .data # .external_context': {
			this: 'external_context',
			remap: 'post.attachments # .external_context',

			'.url': types.string
		}
	}
};



/*

  # Comments

    */

var comments = {

	'.comments #': {

		this: 'comment',
		type: 'comments',

		'.timestamp': types.number,
		'.data # .comment .comment => comment.comment': types.stringDecode,
		'.data # .comment .author => comment.author': types.stringDecode,

		'.title': types.stringDecodeNotEmpty,
		'.title => .action': {
			__type: types.stringDecode,
			__oneOf: 	[{
				regex: '{displayName} commented on (?:his|her) own post\.',
				type: 'commented_own_post'
			}], // commentsTitle // [!!!]
		},

		'.attachments # .data # .media': {
			this: 'media',
			remap: 'comment.attachments # .media',

			'.uri': types.string,
			'.creation_timestamp': types.number,
			'.title': types.stringDecodeNotEmpty,
			'.description': types.stringDecodeNotEmpty,

			'.media_metadata .photo_metadata': {
				remap: 'media.photo_metadata',

				// '.taken_timestamp': types.number,
				// '.latitude': types.float,
				// '.longitude': types.float,
				// '.upload_ip': types.string
			},


			'.media_metadata .video_metadata': {
				remap: 'media.video_metadata',

				// '.upload_timestamp': types.number,
				// '.upload_ip': types.string
			}
		},

		'.attachments # .data # .external_context': {
			this: 'external_context',
			remap: 'comment.attachments # .external_context',

			'.url': types.string
		}
	}
};


/*

  # Events
  - "event_joined"
  - "your_event"

    */

var event_responses = {

	'.event_responses .events_joined #': {
		this: 'event',
		type: 'events_joined',

		'.name': types.stringDecode,
		'.start_timestamp': types.number,
		'.end_timestamp': types.number,

		__includeOnFullMatch: ['.name', '.start_timestamp', '.end_timestamp'],
		__excludeOnKeyMatch: ['.description', '.place', '.create_timestamp']
	}
};

var your_events = {

	'.your_events #': {
		this: 'event',
		type: 'your_events',

		'.name': types.stringDecode,
		'.start_timestamp': types.number,
		'.end_timestamp': types.number,

		'.place .name => event.place_name': types.stringDecode,
		'.description': types.stringDecode,
		'.create_timestamp': types.number
	}
}

export { posts, comments, your_events, event_responses, testObject, objectTest_1, objectTest_2 }