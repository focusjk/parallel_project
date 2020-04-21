import React from 'react';
import Bar from '../components/Bar';
import { Paper } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatBox from '../components/ChatBox';
import GroupBox from '../components/GroupBox';

const Main = () => {
  const [status1, setStatus1] = React.useState(false);

  return (
    <div>
      <Bar />
      <div style={{ display: 'flex', height: '92vh' }}>
        <Paper
          square
          elevation={0}
          width="20vw"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: '#424242',
          }}
        >
          <div>
            <div
              style={{
                color: '#EFEFEF',
                fontSize: '20px',
                marginLeft: 16,
                padding: '20px 15px 20px 15px',
              }}
            >
              GROUPS
            </div>
            <div style={{ border: '0.5px solid #606060' }} />
            <GroupBox />
          </div>
          <div
            style={{
              padding: '20px 15px 30px 15px',
            }}
          >
            <div
              style={{
                color: '#A8A8A8',
                fontSize: '12px',
                margin: '0 0 2px 6px',
              }}
            >
              Create new group
            </div>
            <div
              style={{
                display: 'flex',
                alignSelf: 'center',
              }}
            >
              <TextField
                variant="outlined"
                placeholder="NAME"
                size="small"
                style={{
                  backgroundColor: '#EFEFEF',
                  width: 286,
                  borderRadius: 6,
                }}
              />
              <AddCircleIcon
                style={{ color: '#FFF100', fontSize: 36, marginLeft: 6 }}
              />
            </div>
          </div>
        </Paper>
        <Paper
          square
          elevation={0}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: '20px 20px 30px 20px',
            width: '100vw',
          }}
        >
          <div>
            <ChatBox />
            {!status1 && ( //TODO set status
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '5px 0 5px 0',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    color: '#606060',
                    fontSize: '14px',
                    height: '22px',
                    width: '55px',
                    borderRadius: '10%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  unread
                </div>
              </div>
            )}
          </div>
          <TextField
            variant="outlined"
            placeholder="Message.."
            size="small"
            style={{
              display: 'flex',
              alignSelf: 'center',
              backgroundColor: '#EFEFEF',
              width: '100%',
              borderRadius: 6,
              marginLeft: 4,
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Main;
