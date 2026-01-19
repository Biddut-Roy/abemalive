"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown, Reply, MoreVertical } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Comment {
  id: string;
  author: string;
  content: string;
  likes: number;
  timestamp: Date;
  replies?: Comment[];
}

interface CommentsProps {
  videoId: string;
}

const mockComments: Comment[] = [
  {
    id: '1',
    author: 'TechEnthusiast',
    content: 'This is exactly what I was looking for! Great explanation and very detailed. Thanks for making this content.',
    likes: 42,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    replies: [
      {
        id: '1-1',
        author: 'CreatorChannel',
        content: 'Thanks for watching! Glad you found it helpful.',
        likes: 15,
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      }
    ]
  },
  {
    id: '2',
    author: 'LearningDaily',
    content: 'Amazing content as always! Could you make a follow-up video about advanced techniques?',
    likes: 28,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: '3',
    author: 'CodeNewbie',
    content: 'I\'m just starting out and this really helped me understand the basics. Keep up the great work!',
    likes: 19,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
  }
];

export default function Comments({ videoId }: CommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [showReplies, setShowReplies] = useState<Record<string, boolean>>({});

  const toggleReplies = (commentId: string) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-white mb-6">
        {mockComments.length} Comments
      </h2>

      {/* Add Comment */}
      <div className="mb-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shrink-0"></div>
          
          <div className="flex-1">
            <Textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder-gray-400 resize-none focus:border-blue-500"
              rows={1}
            />
            
            {newComment && (
              <div className="flex items-center justify-end gap-2 mt-2">
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setNewComment('')}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  disabled={!newComment.trim()}
                >
                  Comment
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin">
        {mockComments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            {/* Main Comment */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shrink-0"></div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-medium text-sm">{comment.author}</span>
                  <span className="text-gray-400 text-xs">
                    {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-2">{comment.content}</p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white h-8 w-8"
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-gray-400 text-xs">{comment.likes}</span>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white h-8 w-8"
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="text-gray-400 hover:text-white h-8 px-2 text-xs font-medium"
                  >
                    <Reply className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white h-8 w-8"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-14">
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 h-8 px-2 text-sm mb-4"
                  onClick={() => toggleReplies(comment.id)}
                >
                  {showReplies[comment.id] ? 'Hide' : 'Show'} {comment.replies.length} replies
                </Button>
                
                {showReplies[comment.id] && (
                  <div className="space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shrink-0"></div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-medium text-sm">{reply.author}</span>
                            <span className="text-gray-400 text-xs">
                              {formatDistanceToNow(reply.timestamp, { addSuffix: true })}
                            </span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-2">{reply.content}</p>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-400 hover:text-white h-6 w-6"
                              >
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <span className="text-gray-400 text-xs">{reply.likes}</span>
                              
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-400 hover:text-white h-6 w-6"
                              >
                                <ThumbsDown className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              className="text-gray-400 hover:text-white h-6 px-2 text-xs font-medium"
                            >
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}